import { Avatar } from "@/components/Avatar";
import { RatingCardContainer, UserDetails } from "./styles";
import Link from "next/link";
import { Heading } from "@/components/Typography/Heading";
import { Text } from "@/components/Typography/Text";
import { RatingStars } from "@/components/RatingStars";

export function RatingCard() {
    return (
        <RatingCardContainer>
            <UserDetails>
                <section>
                    <Link href={`/profile/1`}>
                        <Avatar alt="avatar" src='/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1531891437562-4301cf35b7e4%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D764%26q%3D80&w=256&q=75' />
                    </Link>

                    <div>
                        <Heading size='xs'>Brandon Botosh</Heading>
                        <Text size='sm' color='gray-400'>Há 2 dias</Text>
                    </div>
                </section>

                <RatingStars rating={5} />
            </UserDetails>

            <Text size='sm' color='gray-300'>Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget</Text>
        </RatingCardContainer>
    );
}