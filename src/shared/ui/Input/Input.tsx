import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

// type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
//
// interface InputProps extends HTMLInputProps{
//     type?: string
//     className?: string
//     value?: string
//     onChange?: string
// }

interface InputProps {
    type: string;
    className: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    autoFocus: boolean
}

type PropsType = Partial<InputProps>

export const Input = memo((props: PropsType) => {
    const {
        className,
        type = 'text',
        value,
        onChange,
        placeholder,
        autoFocus,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autoFocus]);

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.currentTarget.value);
        setCaretPosition(e.currentTarget.value.length);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.currentTarget?.selectionStart || 0);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder
                && (
                    <div className={cls.placeholder}>
                        {`${placeholder}>`}
                    </div>
                )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    className={cls.input}
                    value={value}
                    onChange={onChangeHandler}
                    type={type}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused
                    && <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }} />}
            </div>
        </div>
    );
});
