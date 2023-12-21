import React from 'react';
import renderer, { ReactTestRendererJSON, act, ReactTestRenderer } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';

// theme
import { defaultTheme } from '../../theme';

// providers
import LanguageProvider from '../../providers/LanguageProvider';

// navigation
import { AuthorizedNavigation, navigationRoute } from '../../navigation';

describe('<Apps />', () => {
  it('loads app list if no app identifier', async () => {
    let rendered: ReactTestRenderer | undefined;

    await act(async () => {
      rendered = renderer
        .create(
          <MemoryRouter initialEntries={[navigationRoute.apps]}>
            <ThemeProvider theme={defaultTheme}>
              <LanguageProvider>
                <AuthorizedNavigation/>
              </LanguageProvider>
            </ThemeProvider>
          </MemoryRouter>
        );
    });

    expect(rendered).toBeDefined();

    const tree = (rendered as ReactTestRenderer).toJSON();

    const treeElement = tree as ReactTestRendererJSON;
    expect((treeElement.children?.[0] as ReactTestRendererJSON)?.children?.length).toBe(1);
    expect((treeElement.children?.[0] as ReactTestRendererJSON)?.type).toBe('h1');
    expect((treeElement.children?.[0] as ReactTestRendererJSON)?.children?.[0]).toBe('Apps');
    expect((treeElement.children?.[1] as ReactTestRendererJSON)?.children?.length).toBe(1); // app count
  });

  it('shows not found if app identifier is not within allowed apps', async () => {
    let rendered: ReactTestRenderer | undefined;

    await act(async () => {
      rendered = renderer
        .create(
          <MemoryRouter initialEntries={[navigationRoute.apps + '/' + 'what-the-fook-unknown-app-69420']}>
            <ThemeProvider theme={defaultTheme}>
              <LanguageProvider>
                <AuthorizedNavigation/>
              </LanguageProvider>
            </ThemeProvider>
          </MemoryRouter>
        );
    });

    expect(rendered).toBeDefined();

    const tree = (rendered as ReactTestRenderer).toJSON();

    expect(tree).toMatchSnapshot();

    const treeElement = tree as ReactTestRendererJSON;
    expect(treeElement.children?.length).toBe(1);
    expect(treeElement?.type).toBe('p');
    expect(treeElement.children?.[0]).toBe('App not found');
  });

  it('successfully loads app by identifier', async () => {
    let rendered: ReactTestRenderer | undefined;

    await act(async () => {
      rendered = renderer
        .create(
          <MemoryRouter initialEntries={[navigationRoute.apps + '/' + 'sign-message']}>
            <ThemeProvider theme={defaultTheme}>
              <LanguageProvider>
                <AuthorizedNavigation/>
              </LanguageProvider>
            </ThemeProvider>
          </MemoryRouter>
        );
      // there's artificial 1s timeout for app loading screen, lets add it here as well
      await new Promise(resolve => setTimeout(resolve, 1100));
    });

    expect(rendered).toBeDefined();

    const tree = (rendered as ReactTestRenderer).toJSON();

    expect(tree).toMatchSnapshot();

    const mainWrapperElement = tree as ReactTestRendererJSON;
    const treeElements = mainWrapperElement.children as ReactTestRendererJSON[];

    expect(treeElements[0].children?.length).toBe(1);
    expect(treeElements[0].type).toBe('h1');
    expect(treeElements[0].children?.[0]).toBe('Sign Message');
    expect(treeElements[1].type).toBe('textarea');
    expect(treeElements[2].children?.length).toBe(1);
    expect(treeElements[2].type).toBe('button');
    expect(treeElements[2].children?.[0]).toBe('Sign Message');
  });
});


