import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode
    element?: HTMLElement
}

const el = document.getElementById('modals');

export const Portal = ({ children, element = el }: PortalProps) => createPortal(children, element);
