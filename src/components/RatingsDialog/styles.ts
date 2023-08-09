import { styled } from "@/styles";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";

export const DialogOverlay = styled(Dialog.Overlay, {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.60)',
});

export const DialogContent = styled(Dialog.Content, {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '40%',
    height: '100%',
    background: '$gray800',
    boxShadow: '-4px 0px 30px 0px rgba(0, 0, 0, 0.50)',
    padding: '4rem 3rem',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
  
    '&::-webkit-scrollbar': {
        width: 6,
    },
    '&::-webkit-scrollbar-track': {
        background: '$gray700',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '$gray600',
    },
});

export const DialogClose = styled(Dialog.Close, {
    color: '$gray400',
    background: 'transparent',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '$6',
    right: '3rem',
});

export const BookDetailsWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    background: '$gray700',
    padding: '$6 $8',
    borderRadius: '$md',
});
  
export const BookDetailsContainer = styled('div', {
    display: 'flex',
    gap: '$8',
});
  
export const BookImage = styled(Image, {
    borderRadius: '$md',
    objectFit: 'cover',
});
  
export const BookContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
});
  
export const BookInfos = styled('div', {
    marginTop: 40,
    paddingTop: 24,
    borderTop: '1px solid $gray600',
    display: 'flex',
    gap: 60,
});

export const InfoItem = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '$5',
    
    svg: {
        color: '$green100',
    },
});