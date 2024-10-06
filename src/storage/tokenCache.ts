import * as SecureStore from "expo-secure-store";

async function getToken(key: string) {
	try {
		return SecureStore.getItem(key);
	} catch (error) {
		// biome-ignore lint/complexity/noUselessCatch: <explanation>
		throw error;
	}
}

async function saveToken(key: string, value: string) {
	try {
		return SecureStore.setItemAsync(key, value);
	} catch (error) {
		// biome-ignore lint/complexity/noUselessCatch: <explanation>
		throw error;
	}
}

export const tokenCache = { getToken, saveToken };
