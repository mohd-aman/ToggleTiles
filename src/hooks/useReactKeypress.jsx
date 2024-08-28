import { useEffect } from "react";

export default function useReactKeypress() {
  const listener = new window.keypress.Listener();

  const addKeyPressListener = (combo,onCombo) => {
    listener.simple_combo(combo, onCombo);
  };
  const removeKeyPressListener = (combo) => {
    listener.unregister_combo(combo);
  };

  const getAllRegisteredCombos = listener.get_registered_combos.bind(listener);

  useEffect(() => {
    return () => {
      listener.destroy();
    };
  },[]);

  return {
    addKeyPressListener,
    removeKeyPressListener,
    getAllRegisteredCombos
  };
}
