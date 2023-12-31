import { container, margin_top, padding_x } from "../../classes"
import { valuesData } from "../../demoData/data"
import SectionHeader from "../sectionHeader/SectionHeader"
import ValuesList from "../valuesList/ValuesList"

const Values = () => {
    const { title, title2, description, description2, valuesList, link } = valuesData
    return (
        <div className={`values ${margin_top} text-white ${container} ${padding_x}`} id='negotiation_wizardry'>
            <SectionHeader title={title} description={description} />
            <ValuesList title={title2} description={description2} content={valuesList} link={link} />
        </div>
    )
}

export default Values