import * as React from "react";
import { RolloutWidget } from "argo-rollouts/ui/src/app/components/rollout/rollout";
import { ObjectMeta, TypeMeta } from "argo-rollouts/ui/src/models/kubernetes";
import { RolloutRolloutInfo } from "argo-rollouts/ui/src/models/rollout/generated";

interface UiBanner {}
export const Extension = (props: {
  tree: UiBanner;
}) => {
  return <h2>HogeHogeHoge</h2>;
};

export const component = Extension;
