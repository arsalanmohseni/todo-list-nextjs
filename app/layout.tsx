import Background from './Components/Background';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Todolister',
	description: 'A Simple Todo List App Created with next js',
};

/**
 * RootLayout component that wraps the entire application.
 *
 * @param props - The properties for the RootLayout component.
 * @param props.children - The child components to be rendered.
 * @returns The JSX element representing the RootLayout component.
 */
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<html>
			<Background />
			<body className={`${inter.className} z-10`}>{children}</body>
		</html>
	);
}
