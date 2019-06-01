export interface INavItems {
    text: string;
    path: string;
    className?: string;
}

export const navItems: Array<INavItems> = [
    {
        text: 'Inicio',
        path: '#init-page',
        className: 'btn-nav',
    },
    {
        text: 'Quiénes Somos',
        path: '#aboutus-page',
        className: 'btn-nav',
    }, 
    {
        text: 'Nuestros Mienbros',
        path: '#member-page',
        className: 'btn-nav',
    },
];