import {UseImperativeHandle} from './examples/UseImperativeHandle/UseImperativeHandle';
import {UseRafThrottle} from './examples/UseRafThrottle/UseRafThrottle';
import {UseDebounce} from './examples/useDebounce/useDebounce';

export const Hooks = () => {
    return (
        <>
            <UseImperativeHandle/>
            <UseDebounce/>
            <UseRafThrottle/>
        </>
    );
};
