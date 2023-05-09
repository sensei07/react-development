import {useEffect, useRef, DependencyList, EffectCallback} from 'react';
import {useDebounce} from './useDebounce';

export function useDebounceEffect(
    cb: EffectCallback,
    deps: DependencyList,
    ms: number
) {
    const cleanUp = useRef<(() => void) | void>();
    const effectCb = useDebounce(() => {
        cleanUp.current = cb();
    }, ms);

    useEffect(() => {
        effectCb();

        return () => {
            if (typeof cleanUp.current === 'undefined') {
                return;
            }
            cleanUp.current = undefined;
        };
    }, [deps, effectCb]);
}
