import { renderHook } from '@testing-library/react-hooks'
import {useEndpoint} from './useEndpoint'


    it('should return the historic covid-19 daily report)', () => {
        const { result } = renderHook(() => useEndpoint("ca"));

        expect(result.current.data).toEqual([]);
        expect(result.current.isLoading).toBe(true);
    });
