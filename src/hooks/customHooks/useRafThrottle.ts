import {useEffect, useMemo} from 'react';
import {rafThrottle} from '../../utils/rafThrottle';
import {useEvent} from './useEvent';

export function useRafThrottle<Fn extends (...args: any[]) => any>(fn: Fn) {
    const memoizedFn = useEvent(fn);

    const throttleFn = useMemo(() => {
        {
            return rafThrottle((...args: Parameters<Fn>) => {
                memoizedFn(...args);
            });
        }
    }, [memoizedFn]);

    useEffect(() => {
        return () => {
            throttleFn.cancel();
        };
    }, [throttleFn]);

    return throttleFn;
}

