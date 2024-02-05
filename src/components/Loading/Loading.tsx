import { PropsWithChildren } from 'react';
import style from './style.module.css';
import Spinner from '@genaipg/components/Spinner/Spinner';

interface Props extends PropsWithChildren {
    loading: boolean;
    message?: string;
}

export default function Loading({ loading, children }: Props) {
    return loading ? (
        <div className={style.container}>
            <Spinner />
        </div>
    ) : (
        children
    );
}
