import React, {
    InputHTMLAttributes,
    useState,
    useEffect,
    useRef,
    useCallback,
} from 'react';
import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
    const { fieldName, defaultValue, error, registerField } = useField(name);

    const [isFocused, setIsFocused] = useState(false);
    const [isFielded, setIsFielded] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);

        // If booleano
        setIsFielded(!!inputRef.current?.value);
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <Container
            isErrored={!!error}
            isFielded={isFielded}
            isFocused={isFocused}
        >
            {Icon && <Icon size={20} />}
            <input
                // Quando o componente ganhou foco
                onFocus={handleInputFocus}
                // Quando o componente perdeu foco
                onBlur={handleInputBlur}
                defaultValue={defaultValue}
                ref={inputRef}
                {...rest}
            />

            {error && (
                <Error title={error}>
                    <FiAlertCircle color="#c53030" size={20} />
                </Error>
            )}
        </Container>
    );
};

export default Input;
