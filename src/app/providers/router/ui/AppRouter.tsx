import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRouterProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { RequireAuth } from 'app/providers/router/ui/RequierAuth';

const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRouterProps) => {
        const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});

export default AppRouter;
