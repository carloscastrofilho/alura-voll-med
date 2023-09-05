import {
    FormControl,
    Input, ITextProps
} from "native-base";


interface InputProps extends ITextProps {
    placeholder?: string;
    label?: string;
}

export function EntradaTexto({ placeholder,label,...rest }: InputProps) {
    return (
        <FormControl mt={5}>
            <FormControl.Label>{label}</FormControl.Label>
            <Input placeholder={placeholder}
                size='lg' w='100%' borderRadius='lg' background="gray.100"
                shadow={0.9}
                {...rest} />
        </FormControl>
    )
}