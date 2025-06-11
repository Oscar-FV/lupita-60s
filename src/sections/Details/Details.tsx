import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { VENUE_DETAILS } from "./Details.constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, type FormEvent } from "react";
import { supabase } from "@/config/supabase";

type AlertInfo = {
  show: boolean;
  type: 'success' | 'error';
  message: string;
};

export const Details = () => {
  const details = VENUE_DETAILS;
  const [loading, setLoading] = useState(false);
  const [alertInfo, setAlertInfo] = useState<AlertInfo>({
    show: false,
    type: 'success',
    message: '',
  });
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleAssistanceSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const dataToSend = {
      name: formData.name,
    };
    
    try {
       const { error } = await supabase.from("assitants").insert([dataToSend]);

      if (error) throw error;

      setAlertInfo({
        show: true,
        type: 'success',
        message: "¡Gracias por confirmar tu asistencia!"
      });

      // Reset form
      setFormData({ name: "" });
    } catch (error: unknown) {
      console.error("Error:", error);
      let errorMessage = "Error desconocido";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      setAlertInfo({
        show: true,
        type: 'error',
        message: "Error al enviar los datos: " + errorMessage
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen py-16 px-4 mx-auto" id="dets">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="relative z-10 text-4xl md:text-5xl text-center font-title text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Detalles del Evento
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          
          {/* Time Card */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-title">Sábado 28 de Junio</h3>
            </div>
            <p className="text-gray-300 text-xl">{details.time}</p>
          </motion.div>
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-title">{details.name}</h3>
            </div>
            <p className="text-gray-300 mb-4">{details.address}</p>
            <a
              href={details.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary/20 hover:bg-primary px-4 py-2 rounded-lg transition-colors"
            >
              Ver en Google Maps
            </a>
          </motion.div>

        </div>

        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white max-w-4xl mx-auto mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-title text-center mb-6">
            Confirma tu Asistencia
          </h3>
          {alertInfo.show && (
          <div className={`p-4 mb-4 rounded-lg ${
            alertInfo.type === 'success' ? 'bg-green-500/20' : 'bg-red-500/20'
          }`}>
            {alertInfo.message}
          </div>
        )}
          <form className="space-y-4" onSubmit={(e) => handleAssistanceSubmit(e)}>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-gray-300">
                Nombre Completo
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="Ingresa tu nombre"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-700"
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Enviando..." : "Confirmar Asistencia"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
