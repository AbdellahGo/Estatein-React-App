import { container, margin_top, padding_x } from "../../classes"
import { managementFeaturesData } from "../../demoData/data"
import SectionHeader from "../sectionHeader/SectionHeader"
import ValuesList from "../valuesList/ValuesList"

const ManagementFeatures = () => {
    const { title, title2, description, description2, managementFeaturesList, link } = managementFeaturesData
    return (
        <div className={`management-features ${margin_top} text-white ${container} ${padding_x}`} id='property_management'>
            <SectionHeader title={title} description={description} />
            <ValuesList title={title2} description={description2} content={managementFeaturesList} link={link} />
        </div>
    )
}

export default ManagementFeatures