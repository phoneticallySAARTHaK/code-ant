import { Box, Grid } from "@chakra-ui/react";
import {
  FC,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { ringAddition } from "~/utils";

export type TabPanelComponent = FC<
  Required<
    Pick<HTMLAttributes<HTMLDivElement>, "id" | "tabIndex" | "aria-labelledby">
  > & { children: ReactNode; role: "tabpanel" }
>;

export type TabsProps = {
  data: Array<{ tab: ReactNode; content: ReactNode }>;
} & (
  | {
      "aria-labelledby": string;
    }
  | { "aria-label": string }
);

export const Tabs: FC<TabsProps> = ({ data, ...props }) => {
  const tabBaseId = useId();
  const panelBaseId = useId();

  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <>
      <Grid
        role="tablist"
        borderRadius="8px 8px 0 0"
        gridTemplateColumns={`repeat(${data.length}, ${100 / data.length}%)`}
        border="1px solid #E9EAEB"
        pos="relative"
        overflow="hidden"
        bg="#FAFAFA"
        outlineOffset="2px"
        _after={{
          content: '""',
          borderRadius: "inherit",
          pos: "absolute",
          backgroundColor: "brand.500",
          width: `${100 / data.length}%`,
          height: "calc(100% + 1px)",
          left: 0,
          top: 0,
          zIndex: 0,
          transform: `translateX(${selectedIndex * 100}%)`,
          transition: "transform 250ms ease-out",
          pointerEvents: "none",
        }}
        {...props}
      >
        {data.map(({ tab }, index) => (
          <Tab
            setTab={(index) =>
              setSelectedIndex(ringAddition(0, index, data.length))
            }
            isSelected={index === selectedIndex}
            key={index}
            index={index}
            panelBaseId={panelBaseId}
            tabBaseId={tabBaseId}
            children={tab}
          />
        ))}
      </Grid>

      <Grid templateAreas={`"panel"`}>
        {data.map(({ content }, index) => (
          <TabPanel
            isSelected={index === selectedIndex}
            index={index}
            panelBaseId={panelBaseId}
            tabBaseId={tabBaseId}
            children={content}
            key={index}
          />
        ))}
      </Grid>
    </>
  );
};

function getIndexedId(baseId: string, index: number) {
  return `${baseId}-${index}`;
}

type TabProps = {
  isSelected: boolean;
  index: number;
  tabBaseId: string;
  panelBaseId: string;
  children: ReactNode;
  setTab: (index: number) => void;
};

type TabPanelProps = Omit<TabProps, "setTab">;

function Tab({
  tabBaseId,
  panelBaseId,
  index,
  children,
  isSelected,
  setTab,
}: TabProps) {
  const tabRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Move DOM Focus to this tab when selected
    if (isSelected && tabRef.current) {
      tabRef.current.focus();
    }
  }, [isSelected]);

  return (
    <Box
      role="tab"
      ref={tabRef}
      aria-controls={getIndexedId(panelBaseId, index)}
      aria-selected={isSelected ? "true" : "false"}
      id={getIndexedId(tabBaseId, index)}
      tabIndex={isSelected ? 0 : -1}
      zIndex={1}
      color="secondary"
      transition="250ms color linear"
      fontWeight="semibold"
      fontSize="1.25rem"
      lineHeight={1.4}
      cursor="pointer"
      textAlign="center"
      p={{ base: 3, lg: 4 }}
      pos="relative"
      outline="none"
      _selected={{ color: "white" }}
      _focusVisible={{
        "&>*": {
          outline: "2px dotted white",
          outlineOffset: "2px",
        },
      }}
      onClick={() => setTab(index)}
      onKeyDown={(e) => {
        switch (e.key) {
          case "ArrowLeft":
            setTab(index - 1);
            break;
          case "ArrowRight":
            setTab(index + 1);
            break;
        }
      }}
    >
      <span>{children}</span>
    </Box>
  );
}

function TabPanel({
  panelBaseId,
  tabBaseId,
  children,
  index,
  isSelected,
}: TabPanelProps) {
  return (
    <Box
      id={getIndexedId(panelBaseId, index)}
      role="tabpanel"
      tabIndex={isSelected ? 0 : -1}
      aria-labelledby={getIndexedId(tabBaseId, index)}
      gridArea="panel"
      visibility={isSelected ? "visible" : "hidden"}
    >
      {children}
    </Box>
  );
}
