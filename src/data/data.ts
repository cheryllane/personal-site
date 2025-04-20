// Set type for squares in any cage
export type square = {
    numberOfSquares: number;
    combinations: {
        total: number;
        possibleSets: number[][];
    }[];
};

const powerSet = (numbers: number[]) => {
    const result: number[][] = [];
    const loop = (sofar: number[], all: number[]) => {
        for (var i = 0; i < all.length; i++) {
            result.push([...sofar, all[i]]);
            loop([...sofar, all[i]], all.slice(i + 1));
        }
    };
    loop([], numbers);
    return result;
};

export const numbers = Array.from({ length: 9 }, (_x, i) => i + 1);

export const data = () => {
    const cageReference: square[] = [];

    numbers.forEach((n) => {
        if (n > 1) cageReference.push({ numberOfSquares: n, combinations: [] });
    });

    powerSet(numbers).forEach((currentValue) => {
        const setLength = currentValue.length;
        if (setLength === 1) return; // discard single squares
        const indexOfSquares = cageReference.findIndex(
            ({ numberOfSquares }) => numberOfSquares === setLength
        );
        if (indexOfSquares >= 0) {
            const currentTotal = currentValue.reduce((a, b) => a + b, 0);
            const indexOfTotal = cageReference[
                indexOfSquares
            ].combinations.findIndex(({ total }) => total === currentTotal);
            if (indexOfTotal >= 0) {
                cageReference[indexOfSquares].combinations[
                    indexOfTotal
                ].possibleSets.push(currentValue);
            } else {
                cageReference[indexOfSquares].combinations.push({
                    total: currentTotal,
                    possibleSets: [currentValue],
                });
            }
        }
    });

    console.log(cageReference);

    return cageReference;
};
