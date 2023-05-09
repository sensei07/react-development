import {ChangeEvent, useEffect, useRef, useState} from 'react';
import {storageAPI} from '../api/storage';
import {useDebounce} from '../../../../hooks/customHooks/useDebounce';
import {useDebounceEffect} from '../../../../hooks/customHooks/useDebounceEffect';

export const SavedTextInput = () => {
    const [text, setText] = useState('');
    const isTextEdited = useRef(false);

    useDebounceEffect(
        () => {
            storageAPI.save(text);
        }, [text], 3000
    );

    // const saveTextToStorage = useDebounce((text: string) => {
    //     storageAPI.save(text);
    // }, 500);

    const handleUpdate = (e: ChangeEvent<HTMLTextAreaElement>) => {
        isTextEdited.current = true;
        setText(e.target.value);
        // saveTextToStorage(e.target.value);
    };

    useEffect(() => {
        storageAPI.read().then((text) => {
            if (isTextEdited.current) {
                return;
            }
            setText(text);
        });
    }, []);

    return (
        <div>
            <textarea value={text} onChange={handleUpdate} rows={30} cols={80}/>
        </div>
    );
};
