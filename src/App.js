import React from "react";
import {
  EuiButton,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiListGroup,
  EuiListGroupItem,
  EuiText,
  EuiTitle,
  EuiPage,
  EuiPageBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiPageSideBar,
  EuiSideNav,
  EuiSpacer,
} from "@elastic/eui";
import Header from "./Header";
import PageSection from "./PageSection";

// Other themes are also available - see files at
// node_modules/@elastic/eui/dist/
import "@elastic/eui/dist/eui_theme_dark.css";
import "./App.css";

const App = () => {
  const sections = ["About Me", "Projects", "Contact Me"];

  const toHref = (title) => {
    return "#" + title.toLowerCase().split(" ").join("-");
  };

  const navItems = sections.map((section) => ({
    name: section,
    id: section,
    href: toHref(section),
  }));

  const renderTitle = () => {
    return (
      <EuiPageHeader>
        <EuiPageHeaderSection>
          <EuiTitle size="l">
            <h1>Josiel Aponte</h1>
          </EuiTitle>
        </EuiPageHeaderSection>
      </EuiPageHeader>
    );
  };

  return (
    <div className="App">
      <Header sections={sections} className="sticky" />
      <EuiPage restrictWidth={true}>
        <EuiPageSideBar>
          <EuiSideNav items={navItems} />
        </EuiPageSideBar>

        <EuiPageBody component="div">
          {renderTitle()}

          <PageSection title="About Me">
            <EuiText>
              <p>
                I am a senior at Williams College, double majoring in Computer
                Science and Studio Art, with a concentration in Latina/o
                Studies. I am primarily interested in software engineering,
                developing application software, and generally learning how a
                programming language works. I'm currently learning how to work
                on editing websites using HTML and CSS, but I also have
                experience with content management systems, such as WordPress.
                After graduation, I hope to work with a company to create new
                tools that can be useful for everyday life by creating
                implementations for things that may not seem connected to
                coding.
              </p>
              <EuiSpacer />
              <p>
                Aside from computer science, I use a lot of my free time to
                develop my art skills in different mediums, primarily
                photography and drawing. While on campus, I participate in an
                West African drum and dance group called Kusika, as well as
                volunteer to help with a first-year orientation group focused on
                identity, sustainability, and social justice, called Root.
              </p>
            </EuiText>
          </PageSection>
          <EuiSpacer />

          <PageSection title="Projects">
            <EuiText>
              <p>Here are some of the projects I've worked on:</p>
            </EuiText>
            <EuiFlexGroup direction="column" gutterSize="m">
              <EuiFlexItem>
                <EuiCard
                  icon={<EuiIcon size="xxl" type="devToolsApp" />}
                  title='"Do the Math" Programming Language - F#'
                  description="Do the Math (DTM) is a simple specialized 
                             programming language made to simulate how other 
                             languages work using parsers and evaluators. It 
                             includes a REPL, supports file input, and focuses
                             on computing math expressions in prefix and infix 
                             notation."
                  footer={
                    <EuiButton aria-label="Go to Developers Tools">
                      See it
                    </EuiButton>
                  }
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiCard
                  icon={<EuiIcon size="xxl" type="devToolsApp" />}
                  title="Exam Scheduler - Java"
                  description="This program uses a weighted graph and a greedy 
                               sorting algorithm to schedule exams based on a 
                               list of students’ schedules. It creates an 
                               optimized schedul for any list of students to 
                               prevent back-to-back time slots."
                  footer={
                    <EuiButton aria-label="Go to Developers Tools">
                      See it
                    </EuiButton>
                  }
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiCard
                  icon={<EuiIcon size="xxl" type="devToolsApp" />}
                  title="Hash Table Statistics - Java"
                  description="This program implements a hash table to compute 
                               statistics on a data set of 3,000+ movies. It 
                               provided constant search time for information on 
                               the movies that the website, Rotten Tomatoes, 
                               provides."
                  footer={
                    <EuiButton aria-label="Go to Developers Tools">
                      See it
                    </EuiButton>
                  }
                />
              </EuiFlexItem>
              <EuiFlexItem>
                <EuiCard
                  icon={<EuiIcon size="xxl" type="devToolsApp" />}
                  title="Cache Memory Simulator - C"
                  description="This program simulates the hit/miss behavior of 
                               cache memory using the LRU replacement policy. It 
                               dynamically creates the cache based on any size 
                               that was requested by the user."
                  footer={
                    <EuiButton aria-label="Go to Developers Tools">
                      See it
                    </EuiButton>
                  }
                />
              </EuiFlexItem>
            </EuiFlexGroup>
          </PageSection>
          <EuiSpacer />

          <PageSection title="Contact Me">
            <EuiListGroup>
              <EuiListGroupItem label="@japonte21" iconType="logoGithub" />
              <EuiListGroupItem
                label="jma1@williams.edu"
                iconType="logoGmail"
              />
            </EuiListGroup>
          </PageSection>
        </EuiPageBody>
      </EuiPage>
    </div>
  );
};

export default App;