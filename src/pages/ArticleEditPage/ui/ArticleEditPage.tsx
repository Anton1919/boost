import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '../../../widgets/Page/Page';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const isEdit = !!id;

    return (
        <Page className={classNames('', {}, [className])}>
            {isEdit ? `Редактировать статью с ID:  ${id}` : 'Создать новую статью'}
        </Page>
    );
};
export default ArticleEditPage;
