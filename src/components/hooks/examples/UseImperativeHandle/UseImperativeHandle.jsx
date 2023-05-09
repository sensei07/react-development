import {
    forwardRef,
    useState,
    useRef,
    useImperativeHandle,
} from 'react';

import {UseImperativeHandleDescription} from './UseImperativeHandleDescription';
import {useShowHint} from '../../../../hooks/customHooks/useShowHint';

const Input = forwardRef(function Input({value, onUpdate}, ref) {
    const inputRef = useRef(null);

    useImperativeHandle(
        ref, () => ({
            moveCursorToStart() {
                const input = inputRef.current;
                if (!input) return;
                input.focus();
                input.setSelectionRange(0, 0);
            },

            focus() {
                const input = inputRef.current;
                if (!input) return;
                input.focus();
            },

            moveCursorToEnd() {
                const input = inputRef.current;
                if (!input) return;
                input.focus();

                const value = input.value;

                input.setSelectionRange(value.length, value.length);
            },

            selectAllText() {
                const input = inputRef.current;
                if (!input) return;
                input.focus();

                const value = input.value;

                input.setSelectionRange(0, value.length);
            }
        }), []);

    return (
        <input
            ref={inputRef}
            value={value}
            onChange={(e) => onUpdate(e.target.value)}
        />
    );
});

export const UseImperativeHandle = () => {
    const [value, setValue] = useState('hello world');
    const inputRef = useRef(null);

    const {isHintShown, handleOnChangeIsShown} = useShowHint();

    const moveCursorToStart = () => {
        inputRef.current?.moveCursorToStart();
    };

    const focus = () => {
        inputRef.current?.focus();
    };

    const moveCursorToEnd = () => {
        inputRef.current?.moveCursorToEnd();
    };

    const selectAllText = () => {
        inputRef.current?.selectAllText();
    };

    return (
        <div className="App">
            <button onClick={moveCursorToStart}>
                Move Cursor to start
            </button>

            <button onClick={focus}>Focus</button>

            <button onClick={moveCursorToEnd}>
                Move Cursor to end
            </button>

            <button onClick={selectAllText}>Select Text</button>

            <br/>

            <Input
                ref={inputRef}
                value={value}
                onUpdate={setValue}
            />

            <button onClick={handleOnChangeIsShown}>{isHintShown ? 'Hide hint' : 'Show Desc'}</button>
            {isHintShown ? <UseImperativeHandleDescription/> : null}
        </div>
    );
};
