import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { LinkLink } from "~/components/Link";
import { GlowingLogo } from "~/components/login/GlowingLogo";
import { IssuesFixedCard } from "~/components/login/IssuesFixedCard";
import { ProivderButton } from "~/components/login/ProviderButton";
import { StatsCard } from "~/components/login/StatsCard";
import { Tabs } from "~/components/Tabs";
import { AzureDevopsIcon } from "~/icons/AzureDevOpsIcon";
import { BitBucketIcon } from "~/icons/BitBucketIcon";
import { GithubIcon } from "~/icons/GithubIcon";
import { GitlabIcon } from "~/icons/GitlabIcon";
import { Logo } from "~/icons/Logo";
import { SSOIcon } from "~/icons/SSOIcon";

export const Route = createFileRoute("/_auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Flex minH="100svh">
      <Box
        borderRight="1px solid #E9EAEB"
        bg="white"
        flex="0 1 50%"
        display={{ base: "none", lg: "grid" }}
        gridTemplateAreas={`"stats stats"
".     issues"`}
        placeContent="center"
        p={4}
      >
        <GlowingLogo h="33vh" minH="300px" pos="fixed" left={0} bottom={0} />

        <StatsCard
          stats={{
            developers: "10K",
            languageSupport: "30",
            hoursSaved: "100K",
          }}
          gridArea="stats"
        />

        <IssuesFixedCard
          increase={14}
          issuesFixed="500K"
          gridArea="issues"
          transform="translate(1.25rem,-0.75rem)"
        />
      </Box>

      <Flex
        direction="column"
        bg="#FAFAFA"
        justify="center"
        align="stretch"
        p={{ base: 4, md: 6 }}
        flex="1 1 50%"
      >
        <Box>
          <Flex
            border="1px solid #E9EAEB"
            direction="column"
            bg="white"
            borderRadius="12px"
            pt={9}
            pb={6}
            px={{ base: 4, md: 6 }}
            align="center"
          >
            <Text
              as="h1"
              fontWeight="normal"
              fontFamily="satoshi, sans-serif"
              fontSize="2rem"
              color="secondary"
              display="inline-flex"
              alignItems="center"
              lineHeight={1.1}
            >
              <Logo w="2.25rem" mr="0.875rem" />
              CodeAnt AI
            </Text>

            <Text
              mt={{ base: 6, md: 9 }}
              fontSize={{ base: "1.5rem", md: "2rem" }}
              lineHeight={{ base: 2, md: 1.5 }}
              fontWeight="semibold"
            >
              Welcome to CodeAnt AI
            </Text>

            <Box alignSelf="stretch" mt={5}>
              <Tabs
                aria-label="Platform"
                data={[
                  {
                    tab: "SAAS",
                    content: (
                      <VStack spacing={4} py={6}>
                        <ProivderButton icon={<GithubIcon />}>
                          Sign in with Github
                        </ProivderButton>
                        <ProivderButton icon={<BitBucketIcon />}>
                          Sign in with Bitbucket
                        </ProivderButton>
                        <ProivderButton icon={<AzureDevopsIcon />}>
                          Sign in with Azure Devops
                        </ProivderButton>
                        <ProivderButton icon={<GitlabIcon />}>
                          Sign in with Gitlab
                        </ProivderButton>
                      </VStack>
                    ),
                  },
                  {
                    tab: "Self Hosted",
                    content: (
                      <VStack spacing={4} py={6}>
                        <ProivderButton icon={<GitlabIcon />}>
                          Self Hosted Gitlab
                        </ProivderButton>
                        <ProivderButton icon={<SSOIcon />}>
                          Sign in with SSO
                        </ProivderButton>
                      </VStack>
                    ),
                  },
                ]}
              />
            </Box>
          </Flex>

          <Text color="secondary" mt={8} align="center">
            By signing up you agree to the{" "}
            <LinkLink fontWeight="bold" to="/privacy-policy">
              Privacy Policy
            </LinkLink>
            .
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
