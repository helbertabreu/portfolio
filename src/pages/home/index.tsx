// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
  AboutMeArea,
  AboutMeAreaSocialMediaMessage,
  AboutMeAreaWrapperColumns,
  AboutMeAreaContent,
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/my-portfolio`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">Olá, me chamo {userData.nameUser}</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              Desenvolvedor{" "}
              <Text as="span" type="heading1" color="brand1">
                FullStack
              </Text>{" "}
              e amante da{" "}
              <Text as="span" type="heading1" color="brand1">
                tecnologia
              </Text>{" "}
            </Text>
            <Text type="body1" color="grey2">
              Nesta página, você irá conhecer e explorar todos os meus projetos
              e as tecnologias utilizadas
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Ver Projetos
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                Ver código fonte
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Meus projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Alguns de meus{" "}
                <Text as="span" color="brand5">
                  projetos paralelos
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <AboutMeArea id="about-me">
        <Container>
          <AboutMeAreaWrapperColumns>
            <AboutMeAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Sobre Mim
              </Text>
              <Text as="p" type="body1" color="grey2">
                {/* Some of my{" "} */}
                Quando criança tive o meu primeiro contato com um video game. Os
                olhos brilhavam de tanta alegria e a cabeça só pensava em como
                toda essa mágica era feita.
                <Text as="span" color="brand5">
                  {/* side projects */}
                </Text>
                <Text as="p" type="body1" color="grey2">
                  Passei uma boa parte da minha infância tentando descobrir, até
                  adquirir um computador onde começou as incansáveis busca para
                  saber como tudo começou.
                </Text>
                <Text as="p" type="body1" color="grey2">
                  Uma dessas buscas me levou até as linguagens de programação.
                  Tentei aprender algumas linguagens sozinho sem muito sucesso.
                  Após alguns anos me ingressei na faculdade de Engenharia de
                  Software onde tive um maior aprendizado sobre lógica e algumas
                  linguagens mas infelizmente, não pude concluir o curso por
                  problemas pessoais.
                </Text>
                <Text as="p" type="body1" color="grey2">
                  A pouco mais de 1 ano, tive a oportunidade de me ingressar na
                  Kenzie Academy Brasil onde pude aprender várias tecnologias e
                  me aprofundei no Desenvolvimento FullStack.
                </Text>
                <Text as="p" type="body1" color="grey2">
                  Quer saber um pouco mais sobre mim? Acesse minhas redes
                  sociais e vamos conversar.
                </Text>
              </Text>
            </AboutMeAreaSocialMediaMessage>
            {/* <AboutMeAreaContent>
              <AboutMe />
            </AboutMeAreaContent> */}
          </AboutMeAreaWrapperColumns>
        </Container>
      </AboutMeArea>
      <Contacts />
    </main>
  );
};
