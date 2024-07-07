const SIZE = 39;

for (var row = 0; row < SIZE; row++) {
	for (var column = 0; column < SIZE; column++) {
		const isTopBorder = row === 0;
		const isRightBorder = column === SIZE - 1;
		const isBottomBorder = row === SIZE - 1;
		const isLeftBorder = column === 0;
		const isDiagonalLeftToRight = row === column;
		const isDiagonalRightToLeft = SIZE - 1 - row === column;
		const isBorder = isTopBorder || isRightBorder || isBottomBorder || isLeftBorder;
		const isDiagonal = isDiagonalLeftToRight || isDiagonalRightToLeft;

		process.stdout.write(isBorder || isDiagonal ? "X" : " ");
	}
	process.stdout.write("\n");
}
