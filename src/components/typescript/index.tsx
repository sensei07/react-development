import {useShowHint} from '../../hooks/customHooks/useShowHint';

export const Typescript = () => {
    const {isHintShown, handleOnChangeIsShown} = useShowHint();

    return (
        <div>
            <h2>Type Script</h2>
            <button onClick={handleOnChangeIsShown}>{isHintShown ? 'Hide hint' : 'Show Desc'}</button>
            {isHintShown ? 'hint' : null}
        </div>
    );

};
