import { Container, Divider, Text } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Container maxW={"100%"} mt={20} height={"100px"} backgroundImage={`url('/images/Slider_principal.jpg')`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat">
            
            <Divider />
            <Container maxW={"1440px"} py={8}>
                <Text color="white" >Footer</Text>
            </Container>
        </Container>
    );
}