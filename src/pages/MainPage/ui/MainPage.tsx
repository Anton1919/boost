import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RatingCard } from '@/entities/Rating';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            {t('Главная страница')}
            <RatingCard
                title={t('Как вам статья?')}
                feedbackTitle={t('Оставьте отзыв')}
                hasFeedback
            />
        </div>
    );
};

export default MainPage;
