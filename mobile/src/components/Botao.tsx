import { Button, ITextProps } from "native-base";

import { ReactNode } from "react";

interface ButtonProps extends ITextProps {
    children: ReactNode;
}

export function Botao({ children, ...rest }: ButtonProps) {
    return (
        <Button background={"blue.800"} w="100%" marginTop={4}
         borderRadius="lg" {...rest}>
            {children}
        </Button>
    );
}
