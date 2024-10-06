import {
	ActivityIndicator,
	Text,
	TouchableOpacity,
	type TouchableOpacityProps,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
	title: string;
	isLoading: boolean;
	icon: keyof typeof Ionicons.glyphMap;
}

export function Button({
	title,
	isLoading = false,
	icon,
	...rest
}: ButtonProps) {
	return (
		<TouchableOpacity
			style={styles.container}
			disabled={isLoading}
			activeOpacity={0.8}
			{...rest}
		>
			{isLoading ? (
				<ActivityIndicator color="#fff" />
			) : (
				<>
					<Ionicons style={styles.icon} name={icon} />
					<Text style={styles.text}>{title}</Text>
				</>
			)}
		</TouchableOpacity>
	);
}
