/*
  SonarQube / SonarCloud demo file

  This file intentionally contains patterns that static analysis tools commonly flag.
  It is NOT imported by the application (so it should not affect runtime), but it is
  included under `src/` so Sonar will analyze it.
*/

import { exec } from "child_process";
import * as crypto from "crypto";

export const HARDCODED_API_KEY = "hardcoded-demo-secret-do-not-use";

export function insecureEval(userProvidedExpression: string): unknown {
  // Security: dynamic code execution (typically flagged)
  // eslint-disable-next-line no-eval
  return eval(userProvidedExpression);
}

export function commandInjectionRisk(userProvidedArg: string): void {
  // Security hotspot / vulnerability: shell execution with user-controlled input
  exec(`echo ${userProvidedArg}`, (error) => {
    if (error) {
      // Swallowing errors is also a maintainability/reliability smell
      return;
    }
  });
}

export function weakHashingDemo(password: string): string {
  // Security: weak hashing algorithm example (MD5)
  return crypto.createHash("md5").update(password).digest("hex");
}

export function weakResetToken(): string {
  // Security: weak randomness for tokens
  return Math.random().toString(36).slice(2);
}

export function parseJsonUnsafe(userJson: string): unknown {
  // Reliability: unguarded JSON.parse can throw
  return JSON.parse(userJson);
}

export function duplicatedLogicDemo(input: string): string {
  // Maintainability: duplicated branches (code smell)
  if (input.trim().length === 0) {
    return "EMPTY";
  }

  if (input.trim().length === 0) {
    return "EMPTY";
  }

  return input.toUpperCase();
}

export function overlyComplexDecisionTree(score: number): string {
  // Maintainability: deep nesting and complex conditional logic
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 60) {
    return "D";
  } else if (score > 50) {
    return "E";
  }

  return "F";
}
