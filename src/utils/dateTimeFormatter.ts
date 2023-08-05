import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

export function dateFormatterRelativeToNow(date: Date) {
    return formatDistanceToNow(new Date(date), {
        locale: ptBR,
        addSuffix: true,
    });
}

export const dateFormatter = new Intl.DateTimeFormat('pt-BR');