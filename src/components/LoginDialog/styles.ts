import { styled } from '@/styles';
import * as Dialog from '@radix-ui/react-dialog';

export const LoginDialogOverlay = styled(Dialog.Overlay, {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.60)',
});

export const LoginDialogContainer = styled(Dialog.Content, {
    position: 'fixed',
    width: '25%',
    background: '$gray700',
    boxShadow: '4px 16px 24px 0px rgba(0, 0, 0, 0.50)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '3.5rem 4.5rem',
    borderRadius: 12,

    '> div': {
        margin: '0 auto',
        textAlign: 'center',
    },
});

export const LoginDialogClose = styled(Dialog.Close, {
    position: 'absolute',
    top: '$4',
    right: '$4',
    color: '$gray400',
    background: 'transparent',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const LoginDialogContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$10',
});