import { tokenCache } from "@/storage/tokenCache";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { Slot, router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";

const api_key = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

function InitialLayout() {
	const { isSignedIn, isLoaded } = useAuth();

	useEffect(() => {
		if (!isLoaded) return;
		if (isSignedIn) {
			router.replace("/(auth)");
		} else {
			router.replace("/(public)");
		}
	}, [isSignedIn, isLoaded]);
	return isLoaded ? (
		<Slot />
	) : (
		<ActivityIndicator
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
		/>
	);
}

export default function Layout() {
	return (
		<ClerkProvider publishableKey={api_key} tokenCache={tokenCache}>
			<InitialLayout />
		</ClerkProvider>
	);
}
