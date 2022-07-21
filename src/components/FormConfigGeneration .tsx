import {
  Checkbox,
  Input,
  Text,
  Button,
  Container,
  Row,
  Card,
} from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";

export interface FormConfigGenerationFormProps {
  numberRows: string;
  hasPhoneticName: boolean;
  hasNumberPhone: boolean;
  hasBirthday: boolean;
  hasLocations: boolean;
  location: string;
  hasGender: boolean;
}

export interface FormConfigGenerationProps {
  onSubmit: (data: FormConfigGenerationFormProps) => void;
}

export default function FormConfigGeneration({
  onSubmit,
}: FormConfigGenerationProps) {
  const { control, handleSubmit, watch } =
    useForm<FormConfigGenerationFormProps>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <Text h3 css={{ textAlign: "center", marginBottom: 16 }}>
          Config Generation Data
        </Text>
        <Container
          fluid
          justify="flex-start"
          display="flex"
          css={{ flexDirection: "column", pb: 16 }}
        >
          <Controller
            control={control}
            name="numberRows"
            rules={{
              required: { value: true, message: "Add number row zo fen" },
            }}
            render={({ field: { onChange }, fieldState: { error } }) => {
              const isError = Boolean(error?.message);
              return (
                <Input
                  placeholder="Number rows data"
                  css={{
                    marginBottom: 18,
                    borderStyle: isError ? "solid" : "none",
                    borderColor: isError ? "Red" : "",
                  }}
                  onChange={onChange}
                  helperColor={isError ? "error" : "default"}
                  helperText={error?.message}
                  type="number"
                />
              );
            }}
          />

          <Controller
            control={control}
            name="hasPhoneticName"
            render={({ field: { onChange } }) => {
              return (
                <Checkbox onChange={onChange} css={{ marginBottom: 8 }}>
                  <Text>
                    Generation with first name, last name, first name phonetic, last name phonetic field
                  </Text>
                </Checkbox>
              );
            }}
          />

          <Controller
            control={control}
            name="hasNumberPhone"
            render={({ field: { onChange } }) => {
              return (
                <Checkbox onChange={onChange} css={{ marginBottom: 8 }}>
                  <Text>
                    Random generation number phone (Can use but it can be
                    existed in DB)
                  </Text>
                </Checkbox>
              );
            }}
          />

          <Controller
            control={control}
            name="hasBirthday"
            render={({ field: { onChange } }) => {
              return (
                <Checkbox onChange={onChange} css={{ marginBottom: 8 }}>
                  <Text> Random generation birthday</Text>
                </Checkbox>
              );
            }}
          />
          <Controller
            control={control}
            name="hasGender"
            render={({ field: { onChange } }) => {
              return (
                <Checkbox onChange={onChange} css={{ marginBottom: 8 }}>
                  <Text> Random generation gender</Text>
                </Checkbox>
              );
            }}
          />

          <Row align="center">
            <Controller
              name="hasLocations"
              control={control}
              render={({ field: { onChange } }) => {
                return (
                  <Checkbox onChange={onChange} css={{ marginBottom: 8 }} />
                );
              }}
            />
            <Controller
              name="location"
              control={control}
              render={({ field: { onChange } }) => {
                const hasLocations = watch("hasLocations");

                return (
                  <Input
                    placeholder="ID location"
                    onChange={onChange}
                    css={{ marginLeft: 8, marginBottom: 8 }}
                    disabled={!hasLocations}
                  />
                );
              }}
            />
          </Row>
          <Button type="submit">Create & Download CSV</Button>
        </Container>
      </Card>
    </form>
  );
}
