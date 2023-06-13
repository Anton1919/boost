import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
    className?: string
}

export const Counter = ({ className }: CounterProps) => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterActions.incremented());
    };

    const decrement = () => {
        dispatch(counterActions.decremented());
    };

    return (
        <div className={classNames('', {}, [className])}>
            <h1 data-testid="value title">
                {t('Значение =')}
                {counterValue}
            </h1>
            <Button data-testid="increment btn" onClick={increment}>{t('Увеличить')}</Button>
            <Button data-testid="decrement btn" onClick={decrement}>{t('Уменьшить')}</Button>
        </div>
    );
};
