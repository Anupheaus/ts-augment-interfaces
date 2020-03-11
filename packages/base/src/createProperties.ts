import { PropertyDefinition } from './propertyDefinitions';

type Definitions = {
  [key: string]: PropertyDefinition;
}

interface Settings {
  definitions: Definitions;
}

export function createProperties(settings: Settings) {

}