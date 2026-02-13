import {Environment} from "@react-three/drei";

const StudioLights = () => {
    return (
        <group name="lights">
            <Environment resolution={256}>
                <group>
                    <lightformer
                       form="rect"
                       intensity={10}
                       position={[-10, 5, -5]}
                       scale={10}
                       rotation-y={Math.PI / 2}
                    />
                    <lightformer
                        form="rect"
                        intensity={10}
                        position={[10, 1, 1]}
                        scale={10}
                        rotation-y={Math.PI / 2}
                    />
                </group>
            </Environment>
            <spotlight
                position={[-2, 10, 5]}
               angle={-.15}
               decay={0}
               intensity={Math.PI * 0.2}
            />
            <spotlight
                position={[0, -25, 10]}
                angle={-.15}
                decay={0}
                intensity={Math.PI * 0.2}
            />
            <spotlight
                position={[0, 15, 5]}
                angle={-.15}
                decay={0.1}
                intensity={Math.PI * 1}
            />
        </group>
    )
}
export default StudioLights
