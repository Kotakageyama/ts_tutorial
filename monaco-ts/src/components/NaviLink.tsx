import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Container, Title, Grid, Button } from "@mantine/core";

const NaviLink = () => {
	return (
		<Grid>
			<Grid.Col span="auto">
				<Link href="/">
					<Button size="lg">Homeに行く</Button>
				</Link>
			</Grid.Col>
			<Grid.Col span="auto">
				<Link href="editor" passHref>
					<Button size="lg">エディターに行く</Button>
				</Link>
			</Grid.Col>
			<Grid.Col span="auto">
				<Link href="scratch" passHref>
					<Button size="lg">スクラッチに行く</Button>
				</Link>
			</Grid.Col>
		</Grid>
	);
};

export default NaviLink;
