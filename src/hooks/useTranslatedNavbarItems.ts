import { useLocation } from '@docusaurus/router';
import type { Props as NavbarItemConfig } from '@theme/NavbarItem';

// Top-level sections visible per language
const translatedSections: Record<string, string[]> = {
  en: ['Whitepaper', 'For Investors', 'For Builders', 'For P2P Merchants', 'For Users', 'For Community'],
  pt: ['Whitepaper', 'Para Investidores', 'Para Desenvolvedores', 'Para Comerciantes P2P', 'Para Usuários', 'Para Comunidade'],
};


export function useTranslatedNavbarItems(items: NavbarItemConfig[]): NavbarItemConfig[] {
  const location = useLocation();
  const isPt = location.pathname.split('/').filter(Boolean)[0] === 'pt';
  const topLabels = translatedSections[isPt ? 'pt' : 'en'];

  return items
    .filter((item) => !item.label || topLabels.includes(item.label))
    .map((item) => {
      if (item.type === 'dropdown' && item.label === 'Whitepaper' && item.items && isPt) {
        return {
          ...item,
          items: [{ label: 'Resumo', to: '/pt/whitepaper/abstract' }],
        };
      }
      return item;
    });
}

