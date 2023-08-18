import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage = ({ className }: AdminPanelPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.AdminPanelPage, {}, [className])}>{t(' Admin Panel')}</div>
    );
};

export default AdminPanelPage;
