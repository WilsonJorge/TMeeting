import { useThemeStore } from "@/store/theme";
import Cards from "../dashboard/Cards";
import Charts from "../dashboard/Charts";
import { useCurrentAdminPageNameStore } from "@/store/currentAdminPageName";
import { useEffect } from "react";
import colors from "@/assets/component-colors/container.json";

const DashboardContent: React.FC = () => {
    const { theme } = useThemeStore();
    const { setCurrentPageName } = useCurrentAdminPageNameStore();

    useEffect(() => {
        setCurrentPageName("Painel de Controlo");
    }, [setCurrentPageName]);
    return (
        <>
            <Cards
                bgColor={theme === "light" ? colors.lightBackgroundColor : colors.darkBackgroundColor}
                textColor={theme === "light" ? colors.textDarkColor : colors.textPrimaryColor}
                theme={theme}
            />
            <Charts
                bgColor={theme === "light" ? colors.lightBackgroundColor : colors.darkBackgroundColor}
                textColor={theme === "light" ? colors.textDarkColor : colors.textPrimaryColor}
                theme={theme}
            />
        </>
    );
};

export default DashboardContent;
