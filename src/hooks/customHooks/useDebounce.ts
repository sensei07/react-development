import {useEffect, useMemo} from 'react';
import {debounce} from '../../utils/debounce';
import {useEvent} from './useEvent';

export function useDebounce<Fn extends (...args: any[]) => any>(fn: Fn, ms: number) {
    const memoizedFn = useEvent(fn);

    const debouncedFn = useMemo(() => {
            {
                return debounce((...args: Parameters<Fn>) => {
                    memoizedFn(...args);
                }, ms);
            }
        }, [ms, memoizedFn]
    );

    useEffect(() => {
        return () => {
            debouncedFn.cancel();
        };
    }, [debouncedFn]);

    return debouncedFn;
}

