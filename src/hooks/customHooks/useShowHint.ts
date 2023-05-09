import {useState} from 'react';

export const useShowHint = () => {
    const [isHintShown, setIsHintShown] = useState<boolean>(false);

    const handleOnChangeIsShown = () => {
        setIsHintShown(isHintShown => !isHintShown);
    };

    return {isHintShown, handleOnChangeIsShown};
};
