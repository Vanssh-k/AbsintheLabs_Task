export interface BadgeType {
    id: number;
    name: string;
    src: string;
    alt_name: string;
    factor: string;
    actions: number;
    earned: boolean;
}

export const badges: BadgeType[] = [
    { id: 1, src: '/images/svg/badge1.svg', alt_name: 'Badge 1', name: 'Core OG', factor: '1.15x', actions: 0, earned: true },
    { id: 2, src: '/images/svg/badge2.svg', alt_name: 'Badge 2', name: 'Pioneer Badge', factor: '500 Points', actions: 3, earned: false },
    { id: 3, src: '/images/svg/badge3.svg', alt_name: 'Badge 3', name: 'Pudgy OG', factor: '200 Points', actions: 0, earned: false },
    { id: 4, src: '/images/svg/badge4.svg', alt_name: 'Badge 4', name: 'Torchbearer', factor: '1.15x', actions: 0, earned: false },
    { id: 5, src: '/images/svg/badge5.svg', alt_name: 'Badge 5', name: 'Liquidity Machine', factor: '200 Points', actions: 3, earned: true  },
    { id: 6, src: '/images/svg/badge6.svg', alt_name: 'Badge 6', name: 'Income Engineer', factor: '2x', actions: 3, earned: false },
    { id: 7, src: '/images/svg/badge7.svg', alt_name: 'Badge 7', name: 'Visionary Badge', factor: '1000 Points', actions: 3, earned: true },
    { id: 8, src: '/images/svg/badge8.svg', alt_name: 'Badge 8', name: 'Liquidity OGs', factor: '200 Points', actions: 0, earned: false },
    { id: 9, src: '/images/svg/badge9.svg', alt_name: 'Badge 9', name: 'Pathfinder OG', factor: '150 Points', actions: 1, earned: false },
    { id: 10, src: '/images/svg/badge10.svg', alt_name: 'Badge 10', name: 'Rookie Badge', factor: '150 Points', actions: 1, earned: false },
];

export const actions = [
    { id: 1, action: 'Provide at least $50 Liquidity to USDT/ETH', earned: true },
    { id: 2, action: 'Provide at least $50 Liquidity to LINK/ETH' },
    { id: 3, action: 'Provide at least $100 Liquidity to WBTC/ETH' },
];