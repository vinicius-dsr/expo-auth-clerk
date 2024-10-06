import { StyleSheet, Text, View } from "react-native";

export default function SignIn() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Entrar</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 32,
		justifyContent: "center",
		gap: 2,
	},
	title: {
		fontSize: 32,
		fontWeight: "bold",
	},
});
