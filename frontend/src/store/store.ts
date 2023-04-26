import { create } from 'zustand';

interface IToogleState {
	active: boolean;
	setState: () => void;
	setStateWithValue: (bool: boolean) => void;
}

export const toggleModalNav = create<IToogleState>((set) => ({
	active: false,
	setState: () =>
		set((state) => {
			return { active: !state.active };
		}),
	setStateWithValue: (bool) => {
		set((state) => {
			return { active: bool };
		});
	},
}));

export const toggleBurgerMenu = create<IToogleState>((set) => ({
	active: false,
	setState: () =>
		set((state) => {
			return { active: !state.active };
		}),
	setStateWithValue: (bool) => {
		set((state) => {
			return { active: bool };
		});
	},
}));


