function SkillCard(props) {
 return(
    <div className="p-4 border rounded-lg bg-gray-900">
        <h3 className="font-semibold">
            {props.title}
        </h3>
        <p className="text-gray-300 mt-2 text-sm">
           {props.description}
        </p>
    </div>
 )
}

export default SkillCard